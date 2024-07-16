function getUserInfo() {
    let name = document.getElementById('username').value
    let age = document.getElementById('age').value
    let field = document.getElementById('field').value
    if (name.length === 0 || age.length === 0 || field.length === 0) {
        return alert('Please fill all fields');
    }
    else if (age <= 0) {
        return alert('Invalid age');
    }
    else if (age > 0 && age < 10) {
        return alert(`You're a child and you can't join us`);
    }
    else if (age > 10 && age < 18) {
        return alert(`You're not 18 yet so wait until you're 18 years old`);
    }
    else {
        return alert('Thanks for joining us');
    }
}
