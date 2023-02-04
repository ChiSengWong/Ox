# Init Git Clone:
- `git clone https://github.com/ChiSengWong/Ox`
- `cd Ox`
- `npm i`
- `npm run dev` would run the web app in your local machine on http://localhost:5173/

# Developing:
- Please do not push your changes directly to the main branch
  - `git checkout -b "##your branch name"` # the b flage create a new branch
- When you are with your feature, sync the remote main branch with your local main
  - `git checkout main && git pull`
  - `git checkout "##your branch name"` 
  - `git push`
  

# Tech used:
- Frontend: Typescript/Swelte with SvelteKit as metaframework, Pico CSS for styling.
- Backend: Firebase (TODO)


## Potential Error when setting up:
- Try syncing dependencies version:
  - npm version: v8.19.2
  - node version: v18.12.1
