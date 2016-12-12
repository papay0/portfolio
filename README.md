# Dependences
Node :              ```sudo apt-get install nodejs``` 

# Premier démarrage
A la racine du projet, pour installer les packages : 

```
npm install
```

Pour démarrer le serveur :
```
npm start
```

# Ajout de documents dans le portfolio
Créer un fichier dans ```app/entries/myentry.ts```.

```typescript
import * as common from './common'

let entry : common.Entry = {
    name: "Sigfox LPWAN phy and mac analysis",
    experienceType: common.ExperienceType.Academic,
    category: "Wireless Networks",
    
    // Ici les tags correspondant à cette entrée.
    // Il peut s'agir de compétences de la matrice de compétence,
    // ou de mots clés.
    tags: ["Wireless Networks", "Sigfox", "LORA", "LPWAN"],

    // ----------------------------------------------------------
    // Ici, un résumé du travail présenté.
    // On peut y insérer du *markdown*. 
    // ----------------------------------------------------------
    abstract: `
# Titre
blablabla
## Sous Titre
blablablabla
`,
    // ----------------------------------------------------------
    // Ici, c'est la phase d'analyse : les enseignements retirés
    // de l'expérience. 
    // C'est l'argumentaire qui prouve qu'on a acquis certaines 
    // compétences de la matrice.
    // On peut y insérer du *markdown*.
    // ----------------------------------------------------------
    conclusion: `
# Titre
bmabmabmabma
## SOus Titre
balbablababl
`,

    // ----------------------------------------------------------
    // Ici, Le contenu de l'entrée du portfolio. 
    // Cela peut être un document PDF, markdown ou un simple lien.
    // ----------------------------------------------------------
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `static/sigfox-analysis.pdf`
    }
};

common.library.entries.push(entry)
```

Pour ajouter cette entrée au portfolio, il suffit d'importer le fichier 
dans ```àpp/entries/index.ts``` :

```typescript
import './myentry'
```

# Contenu des documents
## Document PDF
Permet d'intégrer un lecteur PDF embarqué dans la page de contenu :
```typescript
    content: {
        contentType: common.ContentType.PDFDocumentURL,
        contentValue: 
        `static/sigfox-analysis.pdf`
    }
```

## Document markdown
Permet d'intégrer un document markdown embarqué dans la page de contenu.

```typescript
    content: {
        contentType: common.ContentType.RawMarkdownDocumentURL,
        contentValue: 
`
# Du markdown 
`
    }
```

## Lien simple
```typescript
    content: {
        contentType: common.ContentType.Link,
        contentValue: 
        `http://example.com`
    }
```