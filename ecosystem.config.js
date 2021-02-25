module.exports = {
  apps : [{
    name: 'niralbee',
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      key : '/Users/pradeep/Documents/GuhanPharmacy.pem',
      host : '13.127.223.22',
      ref  : 'origin/main',
      repo : 'git@github.com:pradeeprakash/pharma.git',
      path : '/home/guhanpharmacy/landing-page',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && sudo rm -rf /var/www/html/; sudo cp -r build /var/www/html',
      'pre-setup': ''
    }
  }
};

