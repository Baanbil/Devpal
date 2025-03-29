from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def is_palindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())  # Remove spaces and punctuation
    return cleaned == cleaned[::-1]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/check", methods=["POST"])
def check_palindrome():
    data = request.get_json()
    text = data.get("text", "")
    result = is_palindrome(text)
    return jsonify({"palindrome": result})

if __name__ == "__main__":
    app.run(debug=True)