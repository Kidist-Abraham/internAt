define({ "api": [
  {
    "type": "post",
    "url": "/user/",
    "title": "Create User",
    "name": "CreateUser",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the User. (For companies)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t {\n                \"name\": \"Kidist\"   \n\t\t\"username\": \"kidist.abraham@intern.io\",\n\t\t\"password\": \"password\",\n                \"role\": \"Company\"\n                \"LC\":\"dassd\"\n\t }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the User. If not provided, it will set to intern by default.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>The date on which the User entry was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>The date on which the User entry was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the User. (For companies)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>The randomization hash</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>The hashed password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t{\n    \"success\": true,\n    \"user\": {\n        \"date_created\": \"2019-10-30T03:31:42.797Z\",\n        \"date_modified\": \"2019-10-30T03:31:42.797Z\",\n        \"LC\": \"dassd\",\n        \"_id\": \"5db9041ecff7001fb7b1c5f2\",\n        \"username\": \"kidist.abraham@internat.io\",\n        \"role\": \"Company\",\n        \"name\": \"Kidist\",\n        \"salt\": \"a739f55140e16a13adc0d6c7c5fc83e6152637ebe396b0b7c1372351332f84cc\",\n        \"hash\": \"dd4b700d175d334d4c0527a882a3530e5c648e9c6fa46606a4838241c77893b0e640ee7db9f68d492936fd3f90f7f3ffb61087fe6580663c92f38fda290a83b418fcce98c6ff5d2c7590e350f611e7472eef04579131aee1822a723ddd53f8aec2f63e66b1730f8b9800704f9025e75ea1deffca43f13f5c99addbb23c0bef625e8823d1dba610fcf7c5b1332123e7370ad74130ca79a8c9215745e0b39396b26f3c8025e8cb5a1f5757dd3fa56fa55f8d64dba652230407a489f411bacce1f8c8fe5eb04835e438f752e4ddfc52ef3160c1a9a7d30611c1dfd06be38b80b12a730afbde906b4dc8e832258953ebd469785f2167ec6d57ecfc5a6d93ea8983b6ab7d863a2f18192078176ac700276c475dbbbf2f1a00af723827054ef8ba736fbf9aaeb8ec3c68add3485ae1983de25ab5ea77e64b86ed9c9c383bf9faf0d708ea6ac871a5b81e366d2cec5a8ad426b5f821c8a3d86e7e6462cc5fe22081ab42bef6f868f78bbe549d85b2d8ba03ad76a1fb3d878c9d6921f10b43afe5e26a93c84f838fd29cb41f0ca329cc4e6fa3233a5d7bc2022af9475b0aeaddfce4eec175ac0d3f286e2be56c31f9ed8ede83130dcad2c9fb00bed6f9eb637380a373e9a4f5a3a485bacb597e2b6125b0fa2c041706c157f14081358f57bfe5cae7047c446b7cf6aa2a67f50603d1a1b6a84910f99773f1d1414f04dec0b44bbe056db9\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"username\": \"kidist.abraham@intern.io\",\n\t\"password\": \"password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who just logged in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n{\n    \"success\": true,\n    \"user\": {\n        \"date_created\": \"2019-10-30T03:31:42.797Z\",\n        \"date_modified\": \"2019-10-30T03:31:42.797Z\",\n        \"LC\": \"dassd\",\n        \"_id\": \"5db9041ecff7001fb7b1c5f2\",\n        \"username\": \"kidist.abraham@internat.io\",\n        \"role\": \"Company\",\n        \"name\": \"Kidist\",\n        \"salt\": \"a739f55140e16a13adc0d6c7c5fc83e6152637ebe396b0b7c1372351332f84cc\",\n        \"hash\": \"dd4b700d175d334d4c0527a882a3530e5c648e9c6fa46606a4838241c77893b0e640ee7db9f68d492936fd3f90f7f3ffb61087fe6580663c92f38fda290a83b418fcce98c6ff5d2c7590e350f611e7472eef04579131aee1822a723ddd53f8aec2f63e66b1730f8b9800704f9025e75ea1deffca43f13f5c99addbb23c0bef625e8823d1dba610fcf7c5b1332123e7370ad74130ca79a8c9215745e0b39396b26f3c8025e8cb5a1f5757dd3fa56fa55f8d64dba652230407a489f411bacce1f8c8fe5eb04835e438f752e4ddfc52ef3160c1a9a7d30611c1dfd06be38b80b12a730afbde906b4dc8e832258953ebd469785f2167ec6d57ecfc5a6d93ea8983b6ab7d863a2f18192078176ac700276c475dbbbf2f1a00af723827054ef8ba736fbf9aaeb8ec3c68add3485ae1983de25ab5ea77e64b86ed9c9c383bf9faf0d708ea6ac871a5b81e366d2cec5a8ad426b5f821c8a3d86e7e6462cc5fe22081ab42bef6f868f78bbe549d85b2d8ba03ad76a1fb3d878c9d6921f10b43afe5e26a93c84f838fd29cb41f0ca329cc4e6fa3233a5d7bc2022af9475b0aeaddfce4eec175ac0d3f286e2be56c31f9ed8ede83130dcad2c9fb00bed6f9eb637380a373e9a4f5a3a485bacb597e2b6125b0fa2c041706c157f14081358f57bfe5cae7047c446b7cf6aa2a67f50603d1a1b6a84910f99773f1d1414f04dec0b44bbe056db9\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "Logout User",
    "name": "LogoutUser",
    "group": "Auth",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\"success\": true\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "Create Company",
    "name": "CreateCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>the role (which should be 'Company')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\"\n    \"role\": \"Company\",\n    \"LC\": \"1234\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "company",
            "description": "<p>The company just created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"success\": true,\n    \"company\": {\n        \"_id\": \"5db44378dabe471c620daeb7\",\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\",\n    \"role\": \"Company\",\n    \"LC\": \"1234\",\n    \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "delete",
    "url": "/companies/:companyId",
    "title": "Delete Company",
    "name": "DeleteCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The ID of the Company to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message confirming success of comapny deletion</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (The updated company):",
          "content": "{\"success\": true,\n    \"message\": \"Company successfully deleted\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "Get all companies",
    "name": "GetAllCompanies",
    "group": "Company",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "companies",
            "description": "<p>The list of all the companies.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"companies\": [\n        {\n            \"role\": \"Company\",\n            \"_id\": \"5db442eedabe471c620daeb6\",\n            \"name\": \"kine\",\n            \"email\": \"@ki\",\n            \"city\": \"AA\",\n            \"catagory\": \"ab\",\n            \"field\": \"abc\",\n            \"LC\": \"1234\"\n            \"__v\": 0\n        },\n        {\n            \"role\": \"Company\",\n            \"_id\": \"5db44378dabe471c620daeb7\",\n            \"name\": \"Qene\",\n            \"email\": \"qene@gm\",\n            \"city\": \"AA\",\n            \"catagory\": \"Tech\",\n            \"field\": \"Game \",\n            \"LC\": \"1234\"\n            \"__v\": 0\n        }, ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies/:companyId",
    "title": "Get Company",
    "name": "GetCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The ID of the Company .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "company",
            "description": "<p>The company of the stated ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n {\n    \"success\": true,\n    \"company\": {\n        \"_id\": \"5db44378dabe471c620daeb7\",\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\",\n    \"role\": \"Company\",\n    \"LC\": \"1234\",\n    \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies/:companyId",
    "title": "Update Company",
    "name": "UpdateCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The ID of the Company to be updated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>the role (which should be 'Company')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"name\": \"Updated Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA and Silicon Valley\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\",\n    \"role\": \"Company\",\n    \"LC\": \"PL12\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "company",
            "description": "<p>The company just updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"success\": true,\n    \"company\":{\n       \"_id\": \"5db44378dabe471c620daeb7\",\n       \"name\": \"Updated Qene\",\n       \"email\": \"qene@gm\",\n       \"city\": \"AA\",\n       \"catagory\": \"Tech\",\n       \"field\": \"Gaming  \",\n       \"description\": \"A Gaming Company .....\",\n       \"role\": \"Company\",\n       \"LC\": \"PL12\",\n       \"__v\": 0 \n              }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/interns",
    "title": "Create Intern",
    "name": "CreateIntern",
    "group": "Intern",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Intern.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Intern.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "interests",
            "description": "<p>Interests of the Interen</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The field of study of the intern</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the Intern</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>the role (which should be 'Intern')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n            \"role\": \"Intern\",\n            \"name\": \"Yocabed\",\n            \"email\": \"yo@mel\",\n            \"interests\": [\"Law\",\"Economics\"]\n            \"field\": \"Law\",\n            \"discription\": \"I am GC class...\"\n           \n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "intern",
            "description": "<p>The intern just created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"success\": true,\n    \"intern\": {\n            \"_id\": \"5db44378dabe471c620daeb7\",\n            \"role\": \"Intern\",\n            \"name\": \"Yocabed\",\n            \"email\": \"yo@mel\",\n            \"interests\": [\"Law\",\"Economics\"]\n            \"field\": \"Law\",\n            \"discription\": \"I am GC class...\",\n            \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/internRoutes.js",
    "groupTitle": "Intern"
  },
  {
    "type": "delete",
    "url": "/interns/:internId",
    "title": "Delete Intern",
    "name": "DeleteIntern",
    "group": "Intern",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "internId",
            "description": "<p>The ID of the Intern to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message confirming success of intern deletion</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (The updated intern):",
          "content": "{\"success\": true,\n    \"message\": \"Intern successfully deleted\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/internRoutes.js",
    "groupTitle": "Intern"
  },
  {
    "type": "get",
    "url": "/interns",
    "title": "Get all interns",
    "name": "GetAllInterns",
    "group": "Intern",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "interns",
            "description": "<p>The list of all the interns.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"interns\": [\n        {\n            \"role\": \"Intern\",\n            \"_id\": \"5db442eedabe471c620daeb6\",\n            \"name\": \"Melat\",\n            \"email\": \"M@mel\",\n            \"Interest\": [\"Health\",\"Agriculture\"]\n            \"field\": \"Mining engineering\",\n            \"discription\": \"I am a 3rd year...\"\n            \"__v\": 0\n        },\n        {\n             \"role\": \"Intern\",\n            \"_id\": \"7d542e54r4f32e471c620aei9\",\n            \"name\": \"Yocabed\",\n            \"email\": \"yo@mel\",\n            \"interests\": [\"Law\",\"Economics\"]\n            \"field\": \"Law\",\n            \"discription\": \"I am GC class...\"\n            \"__v\": 0\n        }, ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/internRoutes.js",
    "groupTitle": "Intern"
  },
  {
    "type": "get",
    "url": "/interns/:internId",
    "title": "Get Intern",
    "name": "GetIntern",
    "group": "Intern",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "internId",
            "description": "<p>The ID of the Intern.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "intern",
            "description": "<p>The intern of the stated ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"success\": true,\n    \"intern\": {\n            \"_id\": \"5db44378dabe471c620daeb7\",\n            \"role\": \"Intern\",\n            \"name\": \"Yocabed\",\n            \"email\": \"yo@mel\",\n            \"interests\": [\"Law\",\"Economics\"]\n            \"field\": \"Law\",\n            \"discription\": \"I am GC class...\",\n            \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/internRoutes.js",
    "groupTitle": "Intern"
  },
  {
    "type": "put",
    "url": "/interns/:internId",
    "title": "Update Intern",
    "name": "UpdateIntern",
    "group": "Intern",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "internId",
            "description": "<p>The ID of the Intern to be updated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Intern.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Intern.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "interests",
            "description": "<p>Interests of the Interen</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The field of study of the intern</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the Intern</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>the role (which should be 'Intern')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n            \"role\": \"Intern\",\n            \"name\": \"Yocabed\",\n            \"email\": \"yo@mel\",\n            \"interests\": [\"Law\",\"Economics\"]\n            \"field\": \"Law\",\n            \"discription\": \"I am GC class...\"\n           \n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "intern",
            "description": "<p>The intern just updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n {\n    \"success\": true,\n    \"intern\": {\n            \"_id\": \"5db44378dabe471c620daeb7\",\n            \"role\": \"Intern\",\n            \"name\": \"Yocabed\",\n            \"email\": \"yo@mel\",\n            \"interests\": [\"Law\",\"Economics\"]\n            \"field\": \"Law\",\n            \"discription\": \"I am GC class...\",\n            \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/internRoutes.js",
    "groupTitle": "Intern"
  },
  {
    "type": "post",
    "url": "/tobeApproved",
    "title": "Create TobeApproved",
    "name": "CreateTobeApproved",
    "group": "TobeApproved",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the tobeApproved/Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the tobeApproved/Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the tobeApproved/Company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>the role (which should be 'Company')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"role\": \"Company\",\n    \"LC\": \"1234\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tobeApproved",
            "description": "<p>The tobeApproved just created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"success\": true,\n    \"tobeApproved\": {\n        \"_id\": \"5db44378dabe471c620daeb7\",\n        \"name\": \"Qene\",\n        \"email\": \"qene@gm\",\n        \"role\": \"Company\",\n        \"LC\": \"1234\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/approvalRoutes.js",
    "groupTitle": "TobeApproved"
  },
  {
    "type": "delete",
    "url": "/tobeApproved/:tobeApprovedId",
    "title": "Delete TobeApproved",
    "name": "DeleteTobeApproved",
    "group": "TobeApproved",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tobeApprovedId",
            "description": "<p>The ID of the TobeApproved to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message confirming success of tobeApproved deletion</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (The updated tobeApproved):",
          "content": "{\"success\": true,\n    \"message\": \"TobeApproved successfully deleted\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/approvalRoutes.js",
    "groupTitle": "TobeApproved"
  },
  {
    "type": "get",
    "url": "/tobeApproved",
    "title": "Get all tobeApproved",
    "name": "GetAllTobeApproved",
    "group": "TobeApproved",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tobeApproved",
            "description": "<p>The list of all the tobeApproved.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"tobeApproved\": [\n        {\n            \"role\": \"Company\",\n            \"_id\": \"5db442eedabe471c620daeb6\",\n            \"name\": \"kine\",\n            \"email\": \"@ki\",\n            \"LC\": \"1234\"\n            \"__v\": 0\n        },\n        {\n            \"role\": \"Company\",\n            \"_id\": \"5db44378dabe471c620daeb7\",\n            \"name\": \"Qene\",\n            \"email\": \"qene@gm\",\n            \"LC\": \"134\"\n            \"__v\": 0\n        }, ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/approvalRoutes.js",
    "groupTitle": "TobeApproved"
  },
  {
    "type": "get",
    "url": "/tobeApproved/:tobeApprovedId",
    "title": "Get TobeApproved",
    "name": "GetTobeApproved",
    "group": "TobeApproved",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tobeApprovedId",
            "description": "<p>The ID of the tobeApproved .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tobeApproved",
            "description": "<p>The tobeApproved of the stated ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n {\n    \"success\": true,\n    \"tobeApproved\": {\n        \"_id\": \"5db44378dabe471c620daeb7\",\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"role\": \"Company\",\n    \"LC\": \"1234\",\n    \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/approvalRoutes.js",
    "groupTitle": "TobeApproved"
  },
  {
    "type": "put",
    "url": "/tobeApproved/:tobeApprovedId",
    "title": "Update TobeApproved",
    "name": "UpdateTobeApproved",
    "group": "TobeApproved",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tobeApprovedId",
            "description": "<p>The ID of the tobeApproved to be updated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the tobeApproved/Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the tobeApproved/Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the tobeApproved/Company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>the role (which should be 'Company')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"name\": \"Updated Qene\",\n    \"email\": \"qene@gm\",\n    \"role\": \"Company\",\n    \"LC\": \"PL12\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tobeApproved",
            "description": "<p>The tobeApproved just updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"success\": true,\n    \"tobeApproved\":{\n       \"_id\": \"5db44378dabe471c620daeb7\",\n       \"name\": \"Updated Qene\",\n       \"email\": \"qene@gm\",\n       \"role\": \"Company\",\n       \"LC\": \"PL12\",\n       \"__v\": 0 \n              }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/approvalRoutes.js",
    "groupTitle": "TobeApproved"
  }
] });
