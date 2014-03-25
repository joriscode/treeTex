/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$cons$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$cons$;
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype.apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons = (function(hd, tl) {
  return new ScalaJS.c.scala_collection_immutable_Stream$Cons().init___O__Lscala_Function0(hd, tl)
});
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype.unapply__Lscala_collection_immutable_Stream__Lscala_Option = (function(xs) {
  return ScalaJS.modules.scala_collection_immutable_Stream$$hash$colon$colon().unapply__Lscala_collection_immutable_Stream__Lscala_Option(xs)
});
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype.unapply__Lscala_collection_immutable_Stream__ = (function(xs) {
  return this.unapply__Lscala_collection_immutable_Stream__Lscala_Option(xs)
});
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype.apply__O__Lscala_Function0__ = (function(hd, tl) {
  return this.apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(hd, tl)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$cons$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$cons$.prototype = ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype;
ScalaJS.is.scala_collection_immutable_Stream$cons$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$cons$)))
});
ScalaJS.as.scala_collection_immutable_Stream$cons$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$cons$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$cons")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$cons$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$cons$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$cons$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$cons$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$cons;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$cons$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$cons$: 0
}, false, "scala.collection.immutable.Stream$cons$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Stream$cons$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$cons$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$cons$;
ScalaJS.moduleInstances.scala_collection_immutable_Stream$cons = undefined;
ScalaJS.modules.scala_collection_immutable_Stream$cons = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Stream$cons)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Stream$cons = new ScalaJS.c.scala_collection_immutable_Stream$cons$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Stream$cons
});
//@ sourceMappingURL=Stream$cons$.js.map
