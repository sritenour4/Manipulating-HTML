document.addEventListener('DOMContentLoaded', function () {
    // 1. Make a button appear on the page when it's first loaded.
    const button = document.createElement('button');
    button.textContent = 'Click me';
    document.body.appendChild(button);

    // When the button is clicked, you should display an Alert box with any (nice) message.
    button.addEventListener('click', function () {
        alert('You clicked the button')
    })

    //2.  When the button (from html) is clicked, display an alert with the message that is typed in the text box.
    let btnSubmit = document.getElementById('btnSubmit');

    btnSubmit.addEventListener('click', function () {
        let message = document.getElementById('txtBox').value;
        alert(message);
    })

    // 3. Make the div (from html) change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
    let myDiv = document.getElementById('myDiv');
    myDiv.addEventListener('mouseenter', function () {
        myDiv.style.backgroundColor = 'green';
    })

    myDiv.addEventListener('mouseleave', function () {
        myDiv.style.backgroundColor = 'white';
    })

    // 4. Put some text in a paragraph. 
    let p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
        'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    document.body.appendChild(p);

    // When you click on the paragraph, the color of the text switches to a random color.
    p.addEventListener('click', function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        p.style.color = color;
    });
});

