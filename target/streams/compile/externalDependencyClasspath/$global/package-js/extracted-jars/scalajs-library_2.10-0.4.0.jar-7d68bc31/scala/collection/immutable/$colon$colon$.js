/** @constructor */
ScalaJS.c.scala_collection_immutable_$colon$colon$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.constructor = ScalaJS.c.scala_collection_immutable_$colon$colon$;
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.toString__T = (function() {
  return "::"
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.apply__O__Lscala_collection_immutable_List__Lscala_collection_immutable_$colon$colon = (function(hd, tl) {
  return new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(hd, tl)
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.unapply__Lscala_collection_immutable_$colon$colon__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.scala$collection$immutable$$colon$colon$$hd__O(), x$0.tl__Lscala_collection_immutable_List()))
  }
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_$colon$colon()
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.unapply__Lscala_collection_immutable_$colon$colon__ = (function(x$0) {
  return this.unapply__Lscala_collection_immutable_$colon$colon__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.apply__O__Lscala_collection_immutable_List__ = (function(hd, tl) {
  return this.apply__O__Lscala_collection_immutable_List__Lscala_collection_immutable_$colon$colon(hd, tl)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_$colon$colon$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_$colon$colon$.prototype = ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype;
ScalaJS.is.scala_collection_immutable_$colon$colon$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_$colon$colon$)))
});
ScalaJS.as.scala_collection_immutable_$colon$colon$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_$colon$colon$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.$colon$colon")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_$colon$colon$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_$colon$colon$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_$colon$colon$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_$colon$colon$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.$colon$colon;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_$colon$colon$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_$colon$colon$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_$colon$colon$.prototype.$classData = ScalaJS.data.scala_collection_immutable_$colon$colon$;
ScalaJS.moduleInstances.scala_collection_immutable_$colon$colon = undefined;
ScalaJS.modules.scala_collection_immutable_$colon$colon = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_$colon$colon)) {
    ScalaJS.moduleInstances.scala_collection_immutable_$colon$colon = new ScalaJS.c.scala_collection_immutable_$colon$colon$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_$colon$colon
});
//@ sourceMappingURL=$colon$colon$.js.map
