aluno = input("Digite o nome do aluno: ")
n1 = float(input("Digite a nota do primeiro bimestre: "))
n2 = float(input("Digite a nota do segundo bimestre: "))
n3 = float(input("Digite a nota do terceiro bimestre: "))
n4 = float(input("Digite a nota do quarto bimestre: "))


media = (n1 + n2 + n3 + n4) / 4


if media >= 60:
    print(f"Ótimas notícias, {aluno} foi aprovado! Média: {media}")
else:
    print(f"Infelizmente {aluno} foi reprovado. Média: {media}")
