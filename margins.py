import pyperclip

final_string = ""

for index in range(1, 4):
    final_string += """
.p-%d                           { padding: var(--col);                     }
.pl-%d                          { padding-left: var(--col);                }
.pr-%d                          { padding-right: var(--col);               }
.pb-%d                          { padding-bottom: var(--col);              }
.pt-%d                          { padding-top: var(--col);                 }
.py-%d                          { padding: var(--col) initial;             }
.px-%d                          { padding: initial var(--col);             }
""" % (index, index, index, index, index, index, index)

pyperclip.copy(final_string)
