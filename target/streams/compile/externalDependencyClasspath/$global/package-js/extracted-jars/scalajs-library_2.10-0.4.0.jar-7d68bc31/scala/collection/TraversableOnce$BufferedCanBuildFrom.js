/** @constructor */
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom;
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.newIterator__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(buff) {
      return arg$outer.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_TraversableOnce(buff)
    })
  })(this)))
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.apply__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Builder = (function(from) {
  var x1 = from;
  if (ScalaJS.is.scala_collection_generic_GenericTraversableTemplate(x1)) {
    var x2 = x1;
    return ScalaJS.as.scala_collection_generic_GenericTraversableTemplate(x2).genericBuilder__Lscala_collection_mutable_Builder().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(x0$1) {
        var x1 = x0$1;
        return arg$outer.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_TraversableOnce(x1)
      })
    })(this)))
  };
  return this.newIterator__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.newIterator__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_TraversableOnce(from))
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.apply__Lscala_collection_TraversableOnce__ = (function(from) {
  return this.apply__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Builder(from)
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.newIterator__ = (function() {
  return this.newIterator__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.traversableToColl__Lscala_collection_GenTraversable__ = (function(t) {
  return this.traversableToColl__Lscala_collection_GenTraversable__Lscala_collection_TraversableOnce(t)
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.bufferToColl__Lscala_collection_mutable_ArrayBuffer__ = (function(buff) {
  return this.bufferToColl__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_TraversableOnce(buff)
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableOnce$BufferedCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype = ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype;
ScalaJS.is.scala_collection_TraversableOnce$BufferedCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce$BufferedCanBuildFrom)))
});
ScalaJS.as.scala_collection_TraversableOnce$BufferedCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce$BufferedCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce$BufferedCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce$BufferedCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce$BufferedCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce$BufferedCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce$BufferedCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce$BufferedCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce$BufferedCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce$BufferedCanBuildFrom: 0
}, false, "scala.collection.TraversableOnce$BufferedCanBuildFrom", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableOnce$BufferedCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableOnce$BufferedCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_TraversableOnce$BufferedCanBuildFrom;
//@ sourceMappingURL=TraversableOnce$BufferedCanBuildFrom.js.map
