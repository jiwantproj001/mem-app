git config --global user.name "Jiwant"
git config --global user.email jiwantproj001@gmail.com
npm run build
git add .
git commit -m 'Deploy to GitHub Pages'
git subtree split --prefix dist -b gh-pages
git push -f proj gh-pages:gh-pages
git branch -D gh-pages
git push