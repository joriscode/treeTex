/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayBuilder$;
ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype.make__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder = (function(evidence$1) {
  var tag = ScalaJS.as.scala_reflect_ClassTag(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1));
  var x1 = tag.runtimeClass__Ljava_lang_Class();
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Byte().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofByte().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Short().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Character().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofChar().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Integer().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofInt().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Long().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofLong().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Float().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofFloat().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Double().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofDouble().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Boolean().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofBoolean().init___()
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Void().TYPE__Ljava_lang_Class(), x1)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofUnit().init___()
  };
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef().init___Lscala_reflect_ClassTag(tag)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArrayBuilder()
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype.make__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.make__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(evidence$1)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$.prototype = ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayBuilder$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayBuilder$)))
});
ScalaJS.as.scala_collection_mutable_ArrayBuilder$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayBuilder$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayBuilder$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuilder$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayBuilder$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayBuilder$: 0
}, false, "scala.collection.mutable.ArrayBuilder$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayBuilder$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayBuilder$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuilder = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayBuilder = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuilder)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuilder = new ScalaJS.c.scala_collection_mutable_ArrayBuilder$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayBuilder
});
//@ sourceMappingURL=ArrayBuilder$.js.map
