from flask import Flask, render_template, request, jsonify, redirect, url_for
import os

app = Flask(__name__)

# armazenamento das msgs
mensagens = []

#login page

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/entrar", methods=["POST"])
def entrar():
    return redirect(url_for("index"))

#index page

@app.route("/index")
def index():
    return render_template("index.html")


# chat page

@app.route("/chat")
def chat():
    return render_template("chat.html")


# avisos page

@app.route("/avisos")
def avisos():
    return render_template("avisos.html")

# perfil page

@app.route("/perfil")
def perfil():
    return render_template("perfil.html")


# chat

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


# Roda o Flask

if __name__ == "__main__":
    # Render define a porta automaticamente
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)