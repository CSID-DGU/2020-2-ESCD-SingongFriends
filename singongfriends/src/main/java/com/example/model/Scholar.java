package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Scholar {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "scholarId")
    private int scholarId;

    private String fund;

    private int money;

    @OneToMany(mappedBy = "scholar", cascade = CascadeType.ALL)
    private List<StudentScholar> studentScholarList = new ArrayList<>();

    public Scholar(String fund, int money) {
        this.fund = fund;
        this.money = money;
    }
}
