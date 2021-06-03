function createElement(tag, props, ...children) {
    if (typeof tag === "function") {
        let el = tag(props, children);
        el.component = tag;
        return el;
    }

    let element = {
        tag,
        attrs: props,
        children: []
    }

    children.forEach((child) => {
        appendChild(element, child);
    });

    return element;
};

const appendChild = (parent, child) => {
    if (Array.isArray(child)) child.forEach((nestedChild) => appendChild(parent, nestedChild));
    else {
        if (typeof child == 'object') {
            let pushObject = {};
            for (let key in child) {
                pushObject[key] = child[key];
            }

            parent.children.push(pushObject);
        }
        else parent.children.push(child);
    }
};