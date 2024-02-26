from flask import render_template, request, flash, redirect, url_for, jsonify
from app import app
from app.forms import LoginForm


@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)


@app.route('/login', methods=['GET', 'POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit() and request.method == 'POST':
        flash(f'Log in requested for {form.username.data}')
        return redirect(url_for('index'))

    return render_template('login.html', title='Sign In', form=form)

@app.route('/tester')
def tester():
    cheeky_names = {'leader': 'David',
                    'advisor': 'Pablo'}

    return jsonify(cheeky_names)