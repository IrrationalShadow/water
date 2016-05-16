Brad Frost Clarity Conference 2016

style guide types

brand identity - logo, tagline, color, typography
voice & tone - speak with a consistent tone of voice (mailchimp, the economist)
design language -  design principles, color, animation (material design)
code - bem, smacss, oocss, bigcommerce, airbnb - how to write code
ui pattern library - (bootstrap)

"mood boards" - inspiration collage of sites/apps
"style tile" - a collage of the colors/type/style. a general look/feel before high fidelity
"component collage" - sketch file with a bunch of elements + color palette together
All 3 of these things can come in discovery, and then FED's can dive straight
into early development and come up with basic (greyscale) coded concepts.
No need to wait for finished mocks in sketch/photoshop etc.

- Make it official (Build it, Use it, Make it public - does help with recruitment)
- Make it maintainable (Living pattern library - identical to live code - in sync. Eg. Rizzo)
- Make it cross disciplinary (Product, Designers, FEDs, BEDs should be looking and consuming)
- Make it agnostic (Patterns should not be named based on their content)
- Make it contextual (Explain the components/constructs and how/when/why they should be used)
- Make it last (Keep updating it. Release new versions, changelogs, blog posts, etc. PR's into Slack)

create component/construct templates in HTML for either handlebars or react etc
namespace them with component or construct or layout.

Docs:
- In documentation include the components used in any given construct.
- Show the types/variants of each component or construct.




atomic design - http://demo.patternlab.io/

Notes on demo docs:

- tables are an atom
- a simple "by-line" of text = a molecule. Why? It breaks his molecule definition of a "group of atoms"
- blockquote + cite = molecule, not atom. Why? It's 2 fairly related elements.
- blockquote without a cite = atom.
- basic column grid classes = molecules.
- a "block" component (basically a media component with variations) = molecule.
- tabs, pagination, breadcrumbs = molecules.
- primary nav = molecule.
- search form, comment form = molecules.
- individual comment = molecule.
- organisms are fairly empty - header/footer are there, a useless HTML chunk that is apparently
  an "article body" is an organism, as well as the full comment "thread", which includes comment form +
  comment molecules repeated + pagination for viewing comments. There's also recent tweets, related posts, and latest posts, which are all organisms - they're basically just a class with no styling wrapping repeated "block" molecules to make up the latest posts.
  Basically, they're just molecules put together a certain way. Not much styling involved in any of them
  besides the global header/footer.
  Conclusion? Organisms only purpose seems to be that they're typically multiple molecules together.
  No real logic outside of that to distinguish them from molecules. The global header/footer are the only
  unique items, the remaining couple of items are just organised molecules.
- templates are full pages with mock data. Header/Footer included in each one.
  Conclusion? Content templates seem most useful here for browsing/searching. Header/Footer are already
  organisms with there own pages in docs. Suppose it couldn't hurt to have them in the visual, but shouldn't
  be included in the code snippets people will be looking for. Those should be based around the content of
  the page.
