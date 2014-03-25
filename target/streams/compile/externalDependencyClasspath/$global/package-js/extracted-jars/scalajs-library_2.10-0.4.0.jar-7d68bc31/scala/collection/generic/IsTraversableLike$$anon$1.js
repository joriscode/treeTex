/** @constructor */
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.conversion$1 = null
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1;
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype.conversion__Lscala_Function1 = (function() {
  return this.conversion$1
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.conversion$1 = ScalaJS.as.scala_Function1(ScalaJS.modules.scala_Predef().implicitly__O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x))
    })
  })())));
  return this
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype.conversion__ = (function() {
  return this.conversion__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_IsTraversableLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_IsTraversableLike$$anon$1.prototype = ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype;
ScalaJS.is.scala_collection_generic_IsTraversableLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IsTraversableLike$$anon$1)))
});
ScalaJS.as.scala_collection_generic_IsTraversableLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IsTraversableLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IsTraversableLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IsTraversableLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IsTraversableLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_generic_IsTraversableLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IsTraversableLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IsTraversableLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IsTraversableLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_generic_IsTraversableLike$$anon$1: 0
}, false, "scala.collection.generic.IsTraversableLike$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_collection_generic_IsTraversableLike$$anon$1: 1,
  scala_collection_generic_IsTraversableLike: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_IsTraversableLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_generic_IsTraversableLike$$anon$1;
//@ sourceMappingURL=IsTraversableLike$$anon$1.js.map
