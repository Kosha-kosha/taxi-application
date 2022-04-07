package com.mytaxi.taxiapplication.models;

public class Order {
    private String  startPoint;
    private String finishPoint;
    // price

    public Order() {
    }

    public Order(String startPoint, String finishPoint) {
        this.startPoint = startPoint;
        this.finishPoint = finishPoint;
    }

    public String getStartPoint() {
        return startPoint;
    }

    public void setStartPoint(String startPoint) {
        this.startPoint = startPoint;
    }

    public String getFinishPoint() {
        return finishPoint;
    }

    public void setFinishPoint(String finishPoint) {
        this.finishPoint = finishPoint;
    }
}
