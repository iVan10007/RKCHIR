var container = document.getElementsByClassName("container");
let ul =  document.createElement('ul');
container[0].append(ul);

while (true) {
  let data = prompt("Введите текст для элемента списка", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.className = "list_item";
  li.textContent = data;
  ul.append(li);
}