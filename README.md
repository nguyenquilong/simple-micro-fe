# simple-micro-fe

First, you can pull 2 repos. And then, enter each of repos, run command : npm install & npm start. 
Main page : http://localhost:3000
Child page: http://localhost:3001

Config webpack: 
```
new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:3000/remoteEntry.js",
        child1: "child1@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./Child1": "./src/Child1Content.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),```
    
    Đoạn code trên đang sử dụng plugin ModuleFederationPlugin trong webpack để chia sẻ các module giữa các ứng dụng web. Plugin này được sử dụng để kết nối các ứng dụng web được phát triển độc lập thành một hệ thống lớn hơn, mà các ứng dụng này có thể chia sẻ các module với nhau.

Các thuộc tính của plugin như sau:

"name": là tên của ứng dụng hiện tại, đây là một tên đại diện cho ứng dụng này trong toàn bộ hệ thống.
"filename": là tên file sẽ được tạo ra và lưu trữ các thông tin cần thiết để kết nối đến các ứng dụng khác. File này sau đó sẽ được tải qua mạng bởi các ứng dụng khác.
"remotes": là danh sách các ứng dụng khác trong hệ thống, mà ứng dụng hiện tại muốn kết nối và sử dụng các module của chúng. Mỗi remote đều có một tên (ở đây là "home" và "child1") và một địa chỉ để truy cập tới file remoteEntry.js của ứng dụng đó.
"exposes": là danh sách các module được ứng dụng hiện tại chia sẻ với các ứng dụng khác trong hệ thống. Mỗi module được chia sẻ đều có một tên đại diện và một đường dẫn tới file của module đó trong ứng dụng hiện tại.
"shared": là danh sách các module mà ứng dụng hiện tại muốn chia sẻ với các ứng dụng khác. Ở đây, đang chia sẻ các module trong danh sách deps đã được định nghĩa trước đó, và các module react và react-dom với cơ chế singleton để đảm bảo rằng chỉ có một phiên bản của chúng được tải trong toàn bộ hệ thống.
Tóm lại, đoạn code trên đang sử dụng plugin ModuleFederationPlugin để kết nối các ứng dụng web và chia sẻ các module giữa chúng. 
