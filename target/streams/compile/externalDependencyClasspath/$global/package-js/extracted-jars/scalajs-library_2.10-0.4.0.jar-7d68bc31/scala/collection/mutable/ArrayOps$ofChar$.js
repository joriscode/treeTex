/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.thisCollection$extension__AC__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar().init___AC($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.toCollection$extension__AC__AC__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar().init___AC(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.newBuilder$extension__AC__Lscala_collection_mutable_ArrayBuilder$ofChar = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofChar().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.length$extension__AC__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.apply$extension__AC__I__C = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.update$extension__AC__I__C__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.hashCode$extension__AC__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.equals$extension__AC__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofChar(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofChar$1 = null
    } else {
      var ofChar$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofChar(x$1).repr__AC()
    };
    return ($$this === ofChar$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.equals$extension__AC__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AC__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.hashCode$extension__AC__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AC__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.update$extension__AC__I__C__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AC__I__C__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.apply$extension__AC__I__ = (function($$this$4, index$2) {
  return ScalaJS.bC(this.apply$extension__AC__I__C($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.length$extension__AC__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AC__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.newBuilder$extension__AC__ = (function($$this$6) {
  return this.newBuilder$extension__AC__Lscala_collection_mutable_ArrayBuilder$ofChar($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.toCollection$extension__AC__AC__ = (function($$this$7, repr) {
  return this.toCollection$extension__AC__AC__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.thisCollection$extension__AC__ = (function($$this$8) {
  return this.thisCollection$extension__AC__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofChar$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofChar$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofChar$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofChar$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofChar$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofChar$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofChar")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofChar$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofChar$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofChar$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofChar$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofChar;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofChar$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofChar$: 0
}, false, "scala.collection.mutable.ArrayOps$ofChar$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofChar$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofChar$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofChar = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofChar = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofChar)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofChar = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofChar
});
//@ sourceMappingURL=ArrayOps$ofChar$.js.map
