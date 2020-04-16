module.exports = {  
  src_folders: ['tests'], 

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: "node_modules/chromedriver/bin/chromedriver",
  },

  test_settings: {
    default: {
      desiredCapabilities : {
        browserName : 'chrome',
        "chromeOptions": {
          "w3c" : false,
          "args" : ["headless", "--no-sandbox", "disable-gpu"],
        },
        "resolution": "1200x3000",
        "binary": "/usr/bin/google-chrome",
        "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'reports/failure',
      },      
      end_session_on_fail: false,
    }
  }
};

