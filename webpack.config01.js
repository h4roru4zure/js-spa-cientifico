//generamos la constante con el path
const path = require('path');
//archivo necesario para trabajar con html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// plugin de los estilos
const CopyWebpackPlugin = require('copy-webpack-plugin');
//creamos el modulo para exportar 
module.exports = {                    //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
    //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
    
    entry: './src/index.js',    
    //Donde se envía el proyecto estructurado y compilado listo para producción. 
    output: {
        //Creamos el lugar dónde se exportará el proyecto.
        path: path.resolve(__dirname, 'dist'),  
        //Este es el nombre del archivo final para producción.
        filename: 'main.js',
    },
    //usamos resolve para trabajar sobre las extensiones del projecto
    resolve:{
        //Extensiones que vamos a utilizar
        extensions: ['.js']
    },
    //Se crea un modulo con las reglas necesarias que vamos a utilizar. vamos a usar las reglas de babel
    module: {
        rules: [
            {   //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                test: /\.js$/,
                //Excluimos la carpeta de node modules
                exclude: /node_modules/,
                use: {
                    //Utilizar un loader como configuración establecida.
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //Establecemos los plugins que vamos a utilizar
    plugins: [
        //Permite trabajar con los archivos HTML
        new HtmlWebpackPlugin(
            {
            //Cómo vamos a inyectar un valor a un archivo HTML.
            inject : true,
            //Dirección donde se encuentra el template principal
            template: './public/index.html',
            //El nombre que tendrá el archivo
            filename: './index.html',
        }
        ),
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to: ''
    }])
    ]


}