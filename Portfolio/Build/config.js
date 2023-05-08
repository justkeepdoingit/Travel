function createEl(tag, attr = {}, contents, eventListener = {}) {
  let element = document.createElement(tag);
  if (attr)
    Object.entries(attr).map(([key, value]) => {
      typeof value == "object"
        ? Object.entries(value).map(
            ([innerKey, innerValue]) => (element[key][innerKey] = innerValue)
          )
        : element.setAttribute(key, value);
    });
  if (eventListener)
    Object.entries(eventListener).map(([key, value]) =>
      element.addEventListener(key, value)
    );
  if (contents == null) return element;
  let append = (items) => element.append(items);
  // typeof items == "string" ? element.append(items) : element.append(items);
  Array.isArray(contents)
    ? contents.map((data) => append(data))
    : append(contents);
  return element;
}
function createFrag(tag, string) {
  let frag = document.createDocumentFragment(),
    el = document.createElement(tag);
  el.innerHTML = string;
  while (el.firstChild) {
    frag.appendChild(el.firstChild);
  }
  return frag;
}

function useState(state) {
  let initialState = state;
  let setState = (value) => {
    initialState = value;
  };
  return [initialState, setState];
}

function Container(tag, className, contents) {
  let container = createEl(tag, { class: className });

  if (!contents) return container;

  Array.isArray(contents)
    ? contents.map((data) => container.append(data))
    : container.append(contents);

  return container;
}

async function fetchAPI(url, cb) {
  await fetch(url, {
    cache: "no-cache",
  })
    .then((res) => res.json())
    .then((data) => cb(data))
    .catch((err) => {
      console.log(err);
    });
}

function App(selector, content = []) {
  let contents = content.map((data) =>
    document.querySelector(`.${selector}`).append(data)
  );
}

window.addEventListener("scroll", (e) => {
  if (this.scrollY > 0) {
    document.querySelector(".navigation-row").classList.add("scrolled");
    return;
  }
  document.querySelector(".navigation-row").classList.remove("scrolled");
});

function updateElement(selector, content) {
  document.querySelector(`.${selector}`).innerHTML = "";
  Array.isArray(content)
    ? content.map((data) => document.querySelector(`.${selector}`).append(data))
    : document.querySelector(`.${selector}`).append(content);
}
