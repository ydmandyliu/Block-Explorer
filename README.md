# Block Explorer for Ethereum
This project is a block explorer made for Ethereum based on Ruby on Rails and AngularJS.

## Environment Setup (Mac)
First make sure you have installed `Homebrew`.

### Installing Ruby
```
$ brew install rbenv ruby-build

echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

rbenv install 2.3.1
rbenv global 2.3.1
```
### Installing Rails
```
gem install rails -v 4.2.6
rbenv rehash
```
### Installing Geth
```
brew tap ethereum/ethereum
brew install ethereum
```

## Running Instructions
After you have finished the environment setup, download the repository containing this app.
```
# Move into the application directory
cd block-explorer

# Migrate the database
rake db:migrate

# Bring up the server
rails s

# Run geth
geth --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "web3,eth" --rpccorsdomain "http://localhost:3000"
```
Then open the browser and visit `localhost:3000` to see the webpage.
Note that it might take hours to sync the blockchain if it is your first time syncing. 
