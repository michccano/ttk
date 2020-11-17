
from selenium.webdriver.common.keys import Keys
import os
import time
from selenium import webdriver
from selenium.webdriver.common.proxy import *
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from selenium.webdriver.firefox.options import Options




driver = webdriver.Chrome()
html_file = os.getcwd() + "//" + "client.htm"
driver.get("file:///" + html_file)


file1 = open('1.txt', 'r') 
Lines = file1.readlines() 




driver1 = ""

count = 0


myProxy = "host:8080"


proxy = Proxy({
    'proxyType': ProxyType.MANUAL,
    'httpProxy': 'http://23.94.32.198:12345', # set this value as desired
    'ftpProxy': myProxy,  # set this value as desired
    'sslProxy': myProxy,  # set this value as desired
    'noProxy': '',         # set this value as desired
    'socksUsername':  ':mdtaqi',
    'socksPassword':  'fortiktokAPP'
    })



options = Options()
options.binary = FirefoxBinary('C:/Program Files/Mozilla Firefox/firefox.exe')



driver1 = webdriver.Firefox(executable_path='C:/xampp/htdocs/tiktok/system/geckodriver.exe', options=options, proxy=proxy)


driver1.get("https://www.tiktok.com/")
time.sleep(5)


driver1.get("https://www.tiktok.com/login/phone-or-email/email")
time.sleep(5)

driver1.find_element_by_name("email").send_keys("mccano@protonmail.com")
driver1.find_element_by_name("password").send_keys("123wet123@")
time.sleep(5)
#driver1.find_element_by_name("password").send_keys(Keys.RETURN)
driver1.find_element_by_class_name("login-button-Rt4Hk").click()


"""
btns = driver1.find_elements_by_tag_name("button")
for btn in btns:
    if "login-button" in btn.get_attribute("class"):
        btn.click()
        break
"""

time.sleep(10)
   

#driver.close()
