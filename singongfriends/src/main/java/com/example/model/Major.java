package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Major {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "majorId")
    private int majorId;

    private String majorTitle;
}
