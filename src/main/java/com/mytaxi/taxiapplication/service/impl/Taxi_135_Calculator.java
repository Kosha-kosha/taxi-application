package com.mytaxi.taxiapplication.service.impl;

import com.mytaxi.taxiapplication.service.PriceCalculator;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class Taxi_135_Calculator implements PriceCalculator {

    @Override
    public Object getOrdersPrice() {

        URL url;
        try {
            url = new URL("https://www.135.by/#/?utm_source=yandex&utm_medium=cpc&utm_campaign=Poisk_Taxi_Brend" +
                    "&utm_content=10678007034&utm_term=%D1%82%D0%B0%D0%BA%D1%81%D0%B8%20135&yclid=12711551587970449407");

            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            return con.getContent();
        } catch (IOException e) {
            e.printStackTrace();
        }

//        System.setProperty("webdriver.edge.driver","C:\\Selenium\\WebDriver\\msedgedriver.exe");
//        WebDriver driver = new EdgeDriver();
//        EdgeOptions options = new EdgeOptions();
//        driver = new EdgeDriver(options);
//
//        driver.quit();
//        driver.get("https://google.com");
        return null;
    }
}
