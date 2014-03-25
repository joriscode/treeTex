/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$;
ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$.prototype.unapply__Lscala_collection_immutable_Stream__Lscala_Option = (function(xs) {
  if (xs.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(xs.head__O(), xs.tail__O()))
  }
});
ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$.prototype.unapply__Lscala_collection_immutable_Stream__ = (function(xs) {
  return this.unapply__Lscala_collection_immutable_Stream__Lscala_Option(xs)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$$hash$colon$colon$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$$hash$colon$colon$.prototype = ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$.prototype;
ScalaJS.is.scala_collection_immutable_Stream$$hash$colon$colon$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$$hash$colon$colon$)))
});
ScalaJS.as.scala_collection_immutable_Stream$$hash$colon$colon$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$$hash$colon$colon$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$$hash$colon$colon")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$$hash$colon$colon$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$$hash$colon$colon$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$$hash$colon$colon$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$$hash$colon$colon$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$$hash$colon$colon;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$$hash$colon$colon$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$$hash$colon$colon$: 0
}, false, "scala.collection.immutable.Stream$$hash$colon$colon$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Stream$$hash$colon$colon$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$$hash$colon$colon$;
ScalaJS.moduleInstances.scala_collection_immutable_Stream$$hash$colon$colon = undefined;
ScalaJS.modules.scala_collection_immutable_Stream$$hash$colon$colon = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Stream$$hash$colon$colon)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Stream$$hash$colon$colon = new ScalaJS.c.scala_collection_immutable_Stream$$hash$colon$colon$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Stream$$hash$colon$colon
});
//@ sourceMappingURL=Stream$$hash$colon$colon$.js.map
