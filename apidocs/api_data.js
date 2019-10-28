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
            "field": "email",
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
          "content": "\t {\n                \"name\": \"John\"   \n\t\t\"email\": \"john.doe@example.com\",\n\t\t\"password\": \"plain-text-password\",\n                \"role\": \"Company\"\n                \"LC\":\"MIT\"\n\t }",
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
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The hashed password of the User.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {        \n\t\t_id: '58a1ea8b36dfb71d975384af',\n               \"name\": \"John\" , \n             \"role\": \"Company\",\n\t\temail: \"john.doe@example.com\",\n            \tpassword: \"$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy\",\n\t\tdate_created: 2017-02-13T17:19:08.404Z,\n\t\tdate_modified: 2017-02-13T17:19:08.404Z,\n                \"LC\":\"MIT\"\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/user/:userId",
    "title": "Get User",
    "name": "GetUser",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The email of the User.</p>"
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
            "field": "name",
            "description": "<p>The name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LC",
            "description": "<p>The license of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The hashed password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the User.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n{\n    \"date_created\": \"2019-10-28T02:34:37.657Z\",\n    \"date_modified\": \"2019-10-28T02:34:37.657Z\",\n    \"LC\": \"none\",\n    \"_id\": \"5db653bdbedde052af8b914f\",\n    \"email\": \"kidist.abraham@iohk.iok\",\n    \"password\": \"$2b$10$mQ2tJ9AljyjV/PWavOP.bet.3sReXAIAOc3bzItioZlitmI1qo/WG\",\n    \"role\": \"Company\",\n    \"name\": \"Mimi\",\n    \"__v\": 0\n}",
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
            "field": "email",
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
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
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
            "field": "message",
            "description": "<p>Message confirming success of Authentication.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The JWT token for the logged in user.</p>"
          },
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
          "content": "\t HTTP/1.1 201 Created\n\t {\n    \"success\": true,\n    \"message\": \"Auth successful\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpZGlzdC5hYnJhaGFtQGlvaGsuaW9rIiwidXNlcklkIjoiNWRiNjUzYmRiZWRkZTA1MmFmOGI5MTRmIiwiaWF0IjoxNTcyMjMwMjM5LCJleHAiOjE1NzIyMzAyOTl9.uLz2OoyRh7rqX7tpr_kgDD-eRMGGjnT2RON3dgFbgs4\",\n    \"user\": {\n        \"role\": \"Intern\",\n        \"_id\": \"5db653bdbedde052af8b9151\",\n        \"name\": \"Jhon\",\n        \"email\": \"john.doe@example.com\",\n        \"LC\": \"none\",\n        \"__v\": 0\n    }\n}",
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
