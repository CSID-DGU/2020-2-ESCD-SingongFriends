import os
import json
import pandas as pd
df = pd.read_excel("courses.xlsx")

titles = df['title'].astype(str)
scores = df['score'].astype(str)
file = open("courses.json", "w", encoding='UTF-8-sig')
class Course:
    def __init__(self, title, score):
        self.title = title
        self.score = score

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,
                          ensure_ascii=False,
                          sort_keys=True, indent=4)

instances = []
for i in range(0, len(titles)):
    newInstance = Course(titles[i], scores[i]).toJSON()
    instances.append(newInstance)
    print(newInstance)
    json.dump(newInstance, file, default=lambda o: o.__dict__,
                          ensure_ascii=False, sort_keys=True,
                          indent=None)


