/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.thisCollection$extension__AJ__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofLong().init___AJ($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.toCollection$extension__AJ__AJ__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofLong().init___AJ(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.newBuilder$extension__AJ__Lscala_collection_mutable_ArrayBuilder$ofLong = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofLong().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.length$extension__AJ__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.apply$extension__AJ__I__J = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.update$extension__AJ__I__J__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.hashCode$extension__AJ__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.equals$extension__AJ__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofLong(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofLong$1 = null
    } else {
      var ofLong$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofLong(x$1).repr__AJ()
    };
    return ($$this === ofLong$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.equals$extension__AJ__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AJ__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.hashCode$extension__AJ__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AJ__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.update$extension__AJ__I__J__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AJ__I__J__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.apply$extension__AJ__I__ = (function($$this$4, index$2) {
  return ScalaJS.bJ(this.apply$extension__AJ__I__J($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.length$extension__AJ__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AJ__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.newBuilder$extension__AJ__ = (function($$this$6) {
  return this.newBuilder$extension__AJ__Lscala_collection_mutable_ArrayBuilder$ofLong($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.toCollection$extension__AJ__AJ__ = (function($$this$7, repr) {
  return this.toCollection$extension__AJ__AJ__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.thisCollection$extension__AJ__ = (function($$this$8) {
  return this.thisCollection$extension__AJ__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofLong$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofLong$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofLong$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofLong$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofLong$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofLong$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofLong")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofLong$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofLong$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofLong$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofLong$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofLong;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofLong$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofLong$: 0
}, false, "scala.collection.mutable.ArrayOps$ofLong$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofLong$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofLong$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofLong = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofLong = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofLong)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofLong = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofLong
});
//@ sourceMappingURL=ArrayOps$ofLong$.js.map
