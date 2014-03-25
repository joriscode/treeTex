/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder = (function() {
  ScalaJS.c.scala_collection_mutable_LazyBuilder.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder.prototype = new ScalaJS.inheritable.scala_collection_mutable_LazyBuilder();
ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder;
ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder.prototype.result__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.as.scala_collection_immutable_Stream(this.parts__Lscala_collection_mutable_ListBuffer().toStream__Lscala_collection_immutable_Stream().flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$3) {
      return x$3.toStream__Lscala_collection_immutable_Stream()
    })
  })()), ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder.prototype.result__O = (function() {
  return this.result__Lscala_collection_immutable_Stream()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$StreamBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$StreamBuilder.prototype = ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder.prototype;
ScalaJS.is.scala_collection_immutable_Stream$StreamBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$StreamBuilder)))
});
ScalaJS.as.scala_collection_immutable_Stream$StreamBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$StreamBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$StreamBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$StreamBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$StreamBuilder)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$StreamBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$StreamBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$StreamBuilder = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$StreamBuilder: 0
}, false, "scala.collection.immutable.Stream$StreamBuilder", ScalaJS.data.scala_collection_mutable_LazyBuilder, {
  scala_collection_immutable_Stream$StreamBuilder: 1,
  scala_collection_mutable_LazyBuilder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$StreamBuilder;
//@ sourceMappingURL=Stream$StreamBuilder.js.map
