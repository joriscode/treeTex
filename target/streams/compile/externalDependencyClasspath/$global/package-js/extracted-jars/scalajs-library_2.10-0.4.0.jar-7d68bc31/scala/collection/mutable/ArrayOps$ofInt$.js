/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.thisCollection$extension__AI__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofInt().init___AI($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.toCollection$extension__AI__AI__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofInt().init___AI(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.newBuilder$extension__AI__Lscala_collection_mutable_ArrayBuilder$ofInt = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofInt().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.length$extension__AI__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.apply$extension__AI__I__I = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.update$extension__AI__I__I__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.hashCode$extension__AI__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.equals$extension__AI__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofInt(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofInt$1 = null
    } else {
      var ofInt$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofInt(x$1).repr__AI()
    };
    return ($$this === ofInt$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.equals$extension__AI__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AI__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.hashCode$extension__AI__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AI__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.update$extension__AI__I__I__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AI__I__I__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.apply$extension__AI__I__ = (function($$this$4, index$2) {
  return ScalaJS.bI(this.apply$extension__AI__I__I($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.length$extension__AI__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AI__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.newBuilder$extension__AI__ = (function($$this$6) {
  return this.newBuilder$extension__AI__Lscala_collection_mutable_ArrayBuilder$ofInt($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.toCollection$extension__AI__AI__ = (function($$this$7, repr) {
  return this.toCollection$extension__AI__AI__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.thisCollection$extension__AI__ = (function($$this$8) {
  return this.thisCollection$extension__AI__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofInt$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofInt$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofInt$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofInt")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofInt$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofInt;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofInt$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofInt$: 0
}, false, "scala.collection.mutable.ArrayOps$ofInt$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofInt$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofInt$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofInt = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofInt = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofInt)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofInt = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofInt
});
//@ sourceMappingURL=ArrayOps$ofInt$.js.map
