
# Proiect Cloud
## Introducere
Aplicatia prezentata ofera posibilitatea de a avea diferite profiluri pentru diferite instante
## Descrierea problemei
Aplicatia pe care am creat-o prezinta ccrearea total aleatorie a mai multor profiluri pentru diferite persoane.
Fiecare persoana are:
* un nume
* o poza de profil
* un rol intr-o companie
* o porecla
* un citat favorit

Astfel se creaza profiluri aleatorii la fiecare refresh al paginii.

Exemplu1:

![img1](/Img/Screenshot_1.png)

Exemplu2 (dupa reactualizarea paginii):

![img2](/Img/Screenshot_2.png)
## Prezentarea API-urilor utilizate

Pentru aceasta aplicatie am integrat 3 api-uri din lista data(https://github.com/public-apis/public-apis):

* FakeJSON (ofera posibilitatea de a optine fisiere de tip json cu numele, meseriile si ocupatiile entitatilor noastre pe baza unui token, fiecare token avand informatii diferite)
* Identicon (configureaza avatarurile entitatilor noastre in mod aleatoriu)
* kanye.rest (genereaza in mod aleatoriu citatele entitatilor noaste)

## Descrirea arhitecturii

```json
{
    "exemplu" : "json"
}
```