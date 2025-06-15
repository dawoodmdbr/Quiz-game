# Put questions in questions.txt in the format:
# #Q Question text  
# ^ Correct answer
# A Option A text
# B Option B text
# C Option C text
# D Option D text
# The script will convert this to a JavaScript file with an array of question objects.
# Line 59, write the output file name



import json
import re
import os

def parse_questions_from_txt(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = content.strip().split("\n\n")
    questions = []

    for block in blocks:
        lines = block.strip().split("\n")
        q_line = next((line for line in lines if line.startswith("#Q")), "")
        a_line = next((line for line in lines if line.startswith("^")), "")
        options_lines = [line for line in lines if re.match(r"^[ABCD] ", line)]

        if not q_line or not a_line or not options_lines:
            continue

        question_text = q_line[2:].strip()
        correct_answer = a_line[1:].strip()
        options = [line[2:].strip() for line in sorted(options_lines, key=lambda x: x[0])]

        if correct_answer not in options:
            continue

        correct_index = options.index(correct_answer)

        questions.append({
            "question": question_text,
            "options": options,
            "correctIndex": correct_index
        })

    return questions

def save_as_js(questions, output_file):
    js_content = "const questions = " + json.dumps(questions, indent=2) + ";"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"✅ Saved {len(questions)} questions to {output_file}")

if __name__ == "__main__":
    folder = os.path.dirname(__file__)
    input_file = os.path.join(folder, "questions.txt")
    output_file = os.path.join(folder, "animals.js")

    if not os.path.exists(input_file):
        print("❌ File not found:", input_file)
    else:
        data = parse_questions_from_txt(input_file)
        save_as_js(data, output_file)
