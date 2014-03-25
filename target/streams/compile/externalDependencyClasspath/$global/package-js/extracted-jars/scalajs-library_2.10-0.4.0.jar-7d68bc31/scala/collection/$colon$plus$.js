/** @constructor */
ScalaJS.c.scala_collection_$colon$plus$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_$colon$plus$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_$colon$plus$.prototype.constructor = ScalaJS.c.scala_collection_$colon$plus$;
ScalaJS.c.scala_collection_$colon$plus$.prototype.unapply__Lscala_collection_SeqLike__Lscala_Option = (function(t$2) {
  if (t$2.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(t$2.init__O()), t$2.last__O()))
  }
});
ScalaJS.c.scala_collection_$colon$plus$.prototype.unapply__Lscala_collection_SeqLike__ = (function(t) {
  return this.unapply__Lscala_collection_SeqLike__Lscala_Option(t)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_$colon$plus$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_$colon$plus$.prototype = ScalaJS.c.scala_collection_$colon$plus$.prototype;
ScalaJS.is.scala_collection_$colon$plus$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_$colon$plus$)))
});
ScalaJS.as.scala_collection_$colon$plus$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_$colon$plus$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.$colon$plus")
  }
});
ScalaJS.isArrayOf.scala_collection_$colon$plus$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_$colon$plus$)))
});
ScalaJS.asArrayOf.scala_collection_$colon$plus$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_$colon$plus$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.$colon$plus;", depth)
  }
});
ScalaJS.data.scala_collection_$colon$plus$ = new ScalaJS.ClassTypeData({
  scala_collection_$colon$plus$: 0
}, false, "scala.collection.$colon$plus$", ScalaJS.data.java_lang_Object, {
  scala_collection_$colon$plus$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_$colon$plus$.prototype.$classData = ScalaJS.data.scala_collection_$colon$plus$;
ScalaJS.moduleInstances.scala_collection_$colon$plus = undefined;
ScalaJS.modules.scala_collection_$colon$plus = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_$colon$plus)) {
    ScalaJS.moduleInstances.scala_collection_$colon$plus = new ScalaJS.c.scala_collection_$colon$plus$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_$colon$plus
});
//@ sourceMappingURL=$colon$plus$.js.map
