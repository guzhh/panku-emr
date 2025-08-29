// autoAttributeObserver.ts
export interface ClassAttributeRule {
  targetClass: string;
  attributeName: string;
  attributeValue?: string;
}

export function createAutoAttributeObserver(rules: ClassAttributeRule[]): MutationObserver {
  const observer = new MutationObserver((mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
      const elementsToCheck: Element[] = [];

      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node: Node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            elementsToCheck.push(el);
            elementsToCheck.push(...Array.from(el.querySelectorAll("*")));
          }
        });
      }

      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const target = mutation.target as Element | null;
        if (target) elementsToCheck.push(target);
      }

      elementsToCheck.forEach(el => {
        if (!el.classList) return;
        rules.forEach(rule => {
          if (el.classList.contains(rule.targetClass) && !el.hasAttribute(rule.attributeName)) {
            el.setAttribute(rule.attributeName, rule.attributeValue ?? "");
          }
        });
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"]
  });

  return observer;
}
