// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app : './src/main.js',
  },
  output:{
    filename : '[name].bundle.js'
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread','@babel/plugin-transform-destructuring']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    // enable CSS Modules
                    modules: {
                      localIdentName: '[name]__[local]__[hash:base64:8]',
                      getLocalIdent: function (context, localIdentName, localName, options) {
                        var regex = /module=(\w+)&/;
                        var filter = context.resource.match(regex)
                        if(filter){
                          var moduleName = filter[0].replace(regex,(m,p) => p);
                          return `${moduleName}__${localName}`
                        }
                        else{
                          return localName;
                        }
                      }

                    },
                    sourceMap : true,
                    // customize generated class names
                    importLoaders: 2
                  }
                },
                'postcss-loader'
            ]
        }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename : '[name].css'
    })
  ]
}