import pyperclip

final_string = ""

colors = ["white", "mid-white", "mid-grey", "greyed-out", "black", "dark-blue", "blue", "orange", "red", "yellow", "green", "pink", "purple"]

for color in colors:
    final_string += """<div class="col-2">
        <pre class="text-c %s-bg mb-sm">%s</pre>
    </div>

""" % (color, color)

pyperclip.copy(final_string)