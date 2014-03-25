/** @constructor */
ScalaJS.c.scala_collection_$plus$colon$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_$plus$colon$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_$plus$colon$.prototype.constructor = ScalaJS.c.scala_collection_$plus$colon$;
ScalaJS.c.scala_collection_$plus$colon$.prototype.unapply__Lscala_collection_SeqLike__Lscala_Option = (function(t) {
  if (t.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(t.head__O()), t.tail__O()))
  }
});
ScalaJS.c.scala_collection_$plus$colon$.prototype.unapply__Lscala_collection_SeqLike__ = (function(t) {
  return this.unapply__Lscala_collection_SeqLike__Lscala_Option(t)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_$plus$colon$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_$plus$colon$.prototype = ScalaJS.c.scala_collection_$plus$colon$.prototype;
ScalaJS.is.scala_collection_$plus$colon$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_$plus$colon$)))
});
ScalaJS.as.scala_collection_$plus$colon$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_$plus$colon$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.$plus$colon")
  }
});
ScalaJS.isArrayOf.scala_collection_$plus$colon$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_$plus$colon$)))
});
ScalaJS.asArrayOf.scala_collection_$plus$colon$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_$plus$colon$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.$plus$colon;", depth)
  }
});
ScalaJS.data.scala_collection_$plus$colon$ = new ScalaJS.ClassTypeData({
  scala_collection_$plus$colon$: 0
}, false, "scala.collection.$plus$colon$", ScalaJS.data.java_lang_Object, {
  scala_collection_$plus$colon$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_$plus$colon$.prototype.$classData = ScalaJS.data.scala_collection_$plus$colon$;
ScalaJS.moduleInstances.scala_collection_$plus$colon = undefined;
ScalaJS.modules.scala_collection_$plus$colon = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_$plus$colon)) {
    ScalaJS.moduleInstances.scala_collection_$plus$colon = new ScalaJS.c.scala_collection_$plus$colon$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_$plus$colon
});
//@ sourceMappingURL=$plus$colon$.js.map
