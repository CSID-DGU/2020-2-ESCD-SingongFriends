package com.singong.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QMajor is a Querydsl query type for Major
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMajor extends EntityPathBase<Major> {

    private static final long serialVersionUID = -697032669L;

    public static final QMajor major = new QMajor("major");

    public final NumberPath<Integer> majorId = createNumber("majorId", Integer.class);

    public final StringPath majorTitle = createString("majorTitle");

    public QMajor(String variable) {
        super(Major.class, forVariable(variable));
    }

    public QMajor(Path<? extends Major> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMajor(PathMetadata metadata) {
        super(Major.class, metadata);
    }

}

