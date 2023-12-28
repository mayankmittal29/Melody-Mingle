import sqlite3
from flask import Flask, request, render_template, redirect, url_for, json, jsonify, send_from_directory
app = Flask(__name__)

@app.route('/a1')
def a1new():
    return render_template("a1.html")
@app.route('/a2')
def a2():
    return render_template("a2.html")
@app.route('/a3')
def a3():
    return render_template("a3.html")
@app.route('/a4')
def a4():
    return render_template("a4.html")
@app.route('/a5')
def a5():
    return render_template("a5.html")
@app.route('/a6')
def a6():
    return render_template("a6.html")
@app.route('/a7')
def a7():
    return render_template("a7.html")
@app.route('/a8')
def a8():
    return render_template("a8.html")
@app.route('/a9')
def a9():
    return render_template("a9.html")
@app.route('/a10')
def a10():
    return render_template("a10.html")
@app.route('/a11')
def a11():
    return render_template("a11.html")
@app.route('/a12')
def a12():
    return render_template("a12.html")
@app.route('/a13')
def a13():
    return render_template("a13.html")
@app.route('/a14')
def a14():
    return render_template("a14.html")
@app.route('/a15')
def a15():
    return render_template("a15.html")
@app.route('/a16')
def a16():
    return render_template("a16.html")
@app.route('/a17')
def a17():
    return render_template("a17.html")
@app.route('/a18')
def a18():
    return render_template("a18.html")
@app.route('/a19')
def a19():
    return render_template("a19.html")
@app.route('/a20')
def a20():
    return render_template("a20.html")
@app.route('/a21')
def a21():
    return render_template("a21.html")
@app.route('/a22')
def a22():
    return render_template("a22.html")
@app.route('/a23')
def a23():
    return render_template("a23.html")
@app.route('/a24')
def a24():
    return render_template("a24.html")
@app.route('/a25')
def a25():
    return render_template("a25.html")
@app.route('/abouthagu')
def abouthagu():
    return render_template("abouthagu.html")
@app.route('/album1')
def album1():
    return render_template("album1.html")
@app.route('/album2')
def album2():
    return render_template("album2.html")
@app.route('/album3')
def album3():
    return render_template("album3.html")
@app.route('/album4')
def album4():
    return render_template("album4.html")
@app.route('/album5')
def album5():
    return render_template("album5.html")
@app.route('/artistpage')
def artistpage():
    return render_template("artistpage.html")
@app.route('/FirstPage')
def FirstPage():
    return render_template("FirstPage.html")
@app.route('/')
def nothing():
    return render_template("FirstPage.html")
@app.route('/footer')
def footer():
    return render_template("footer.html")
@app.route('/me')
def me():
    return render_template("me.html")
@app.route('/sample')
def sample():
    return render_template("sample.html")
@app.route('/search')
def search():
    return render_template("search.html")
@app.route('/spotlight')
def spotlight():
    return render_template("spotlight.html")


@app.route('/playlist')
def index():
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('SELECT * FROM songs')
    songs = c.fetchall()
    return render_template('playlist.html', songs=songs)

@app.route('/add_song', methods=['POST'])
def add_song():
    name = request.json['name']
    duration = request.json['duration']
    artist=request.json['artist']
    pagename=request.json['pagename']
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute("INSERT INTO songs (name, duration,artist) VALUES (?, ?,?)", (name, duration,artist))
    conn.commit()
    conn.close()
    return render_template(pagename)

@app.route('/delete_song', methods=['POST'])
def delete_song():
    name = request.json['name']
    duration = request.json['duration']
    artist=request.json['artist']
    pagename=request.json['pagename']
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute("DELETE FROM songs WHERE name=? and duration=? and artist=?",(name,duration,artist))
    conn.commit()
    conn.close()
    return render_template(pagename)

@app.route('/delete/<string:name>',methods=['GET','POST'])
def delete(name):
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute(f"DELETE FROM songs WHERE name='{name}'")
    conn.commit()
    conn.close()   
    return redirect('/playlist')

if __name__ == '__main__':
    app.run(debug=True)