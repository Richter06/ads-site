from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

mensagens = []

# LOGIN
@app.route("/")
def login():
    return render_template("login.html")

@app.route("/entrar", methods=["POST"])
def entrar():
    return redirect(url_for("index"))

# INDEX
@app.route("/index")
def index():
    return render_template("index.html")

# CHAT
@app.route("/chat")
def chat():
    return render_template("chat.html")

# AVISOS
@app.route("/avisos")
def avisos():
    return render_template("avisos.html")

# PERFIL
@app.route("/perfil")
def perfil():
    return render_template("perfil.html")

# CHAT FUNCIONAL
@app.route("/enviar", methods=["POST"])
def enviar():
    data = request.get_json()
    msg = data.get("mensagem")
    if msg:
        mensagens.append(msg)
    return "ok"

@app.route("/mensagens")
def get_mensagens():
    return jsonify(mensagens)

if __name__ == "__main__":
    app.run(debug=True)