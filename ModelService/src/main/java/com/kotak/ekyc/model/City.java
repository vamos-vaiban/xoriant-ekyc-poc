package com.kotak.ekyc.model;


import javax.persistence.*;


@Entity
@Table(name = "city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String cityName;

    @ManyToOne(cascade=CascadeType.ALL, targetEntity=State.class)
    @JoinColumn(name = "state_id")
    private State state;

    public City() {
    }

    public City(Integer id, String cityName, State state) {
        this.id = id;
        this.cityName = cityName;
        this.state = state;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", cityName='" + cityName + '\'' +
                ", state=" + state +
                '}';
    }
}
