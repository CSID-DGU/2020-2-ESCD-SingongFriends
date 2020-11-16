package com.example.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QScholar is a Querydsl query type for Scholar
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QScholar extends EntityPathBase<Scholar> {

    private static final long serialVersionUID = 1251966672L;

    public static final QScholar scholar = new QScholar("scholar");

    public final StringPath fund = createString("fund");

    public final NumberPath<Integer> money = createNumber("money", Integer.class);

    public final NumberPath<Integer> scholarId = createNumber("scholarId", Integer.class);

    public final ListPath<StudentScholar, QStudentScholar> studentScholarList = this.<StudentScholar, QStudentScholar>createList("studentScholarList", StudentScholar.class, QStudentScholar.class, PathInits.DIRECT2);

    public QScholar(String variable) {
        super(Scholar.class, forVariable(variable));
    }

    public QScholar(Path<? extends Scholar> path) {
        super(path.getType(), path.getMetadata());
    }

    public QScholar(PathMetadata metadata) {
        super(Scholar.class, metadata);
    }

}

