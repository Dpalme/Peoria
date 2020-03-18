import pyperclip

margin_types = ["half-gutter", "gutter",
                "half-col", "col", "double-col", "colngut"]


final_string = ""

for margin in margin_types:
    final_string += """
.%s-margin 								{ margin: var(--%s); }
.%s-margin-left 						{ margin-left: var(--%s); }
.%s-margin-right 					{ margin-right: var(--%s); }
.%s-margin-bottom 					{ margin-bottom: var(--%s); }
.%s-margin-top 						{ margin-top: var(--%s); }
.%s-margin-vertical 				{ margin-top: var(--%s);
															margin-bottom: var(--%s); }""" % (margin, margin,
                              margin, margin, margin, margin, margin, margin,
                              margin, margin, margin, margin, margin)

pyperclip.copy(final_string)
