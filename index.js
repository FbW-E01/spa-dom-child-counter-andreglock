// 1
const wrapper = document.querySelectorAll("#wrapper > *");

console.log(wrapper);

let counter = 0;
wrapper.forEach(element => {
    console.log(element);
    console.log(element.classList.length);
    counter++;
});

console.log(`#wrapper has ${counter} children`);
console.log(`#wrapper has ${wrapper.length} children`);

const countClasses = (array) => {
    const mostClasses = {
        name: '',
        classes: 0,
    };
    array.forEach(element => {
        if (element.classList.length > mostClasses.classes) {
            mostClasses.name = element;
            mostClasses.classes = element.classList.length;
        };
    });
    return mostClasses;
}

console.log(countClasses(wrapper));