/** @constructor */
ScalaJS.c.scala_concurrent_SyncChannel = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pendingWrites$1 = null;
  this.pendingReads$1 = null
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_SyncChannel.prototype.constructor = ScalaJS.c.scala_concurrent_SyncChannel;
ScalaJS.c.scala_concurrent_SyncChannel.prototype.pendingWrites__p1__Lscala_collection_immutable_List = (function() {
  return this.pendingWrites$1
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.pendingWrites$und$eq__p1__Lscala_collection_immutable_List__V = (function(x$1) {
  this.pendingWrites$1 = x$1
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.pendingReads__p1__Lscala_collection_immutable_List = (function() {
  return this.pendingReads$1
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.pendingReads$und$eq__p1__Lscala_collection_immutable_List__V = (function(x$1) {
  this.pendingReads$1 = x$1
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.write__O__V = (function(data) {
  var writeReq = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  if ((!this.pendingReads__p1__Lscala_collection_immutable_List().isEmpty__Z())) {
    var readReq = ScalaJS.as.scala_concurrent_SyncVar(this.pendingReads__p1__Lscala_collection_immutable_List().head__O());
    this.pendingReads$und$eq__p1__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.pendingReads__p1__Lscala_collection_immutable_List().tail__O()));
    readReq.set__O__V(data);
    writeReq.set__O__V(ScalaJS.bZ(true));
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  } else {
    var x$1 = this.pendingWrites__p1__Lscala_collection_immutable_List();
    var jsx$1 = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(data, writeReq)]), 1))).$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(x$1);
    this.pendingWrites$und$eq__p1__Lscala_collection_immutable_List__V(jsx$1);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  writeReq.get__O()
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.read__O = (function() {
  var readReq = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  if ((!this.pendingWrites__p1__Lscala_collection_immutable_List().isEmpty__Z())) {
    var x1 = ScalaJS.as.scala_Tuple2(this.pendingWrites__p1__Lscala_collection_immutable_List().head__O());
    matchEnd3: {
      if ((x1 !== null)) {
        var data = x1.$$und1__O();
        var writeReq = ScalaJS.as.scala_concurrent_SyncVar(x1.$$und2__O());
        var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(data, writeReq);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    var data$2 = x$2.$$und1__O();
    var writeReq$2 = ScalaJS.as.scala_concurrent_SyncVar(x$2.$$und2__O());
    this.pendingWrites$und$eq__p1__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.pendingWrites__p1__Lscala_collection_immutable_List().tail__O()));
    writeReq$2.set__O__V(ScalaJS.bZ(true));
    readReq.set__O__V(data$2);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  } else {
    var x$3 = this.pendingReads__p1__Lscala_collection_immutable_List();
    var jsx$2 = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_concurrent_SyncVar.getArrayOf(), [readReq]), 1))).$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(x$3);
    this.pendingReads$und$eq__p1__Lscala_collection_immutable_List__V(jsx$2);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return readReq.get__O()
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.pendingWrites$1 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.pendingReads$1 = ScalaJS.modules.scala_collection_immutable_Nil();
  return this
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.read__ = (function() {
  return this.read__O()
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.write__O__ = (function(data) {
  return ScalaJS.bV(this.write__O__V(data))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_SyncChannel = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_SyncChannel.prototype = ScalaJS.c.scala_concurrent_SyncChannel.prototype;
ScalaJS.is.scala_concurrent_SyncChannel = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_SyncChannel)))
});
ScalaJS.as.scala_concurrent_SyncChannel = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_SyncChannel(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.SyncChannel")
  }
});
ScalaJS.isArrayOf.scala_concurrent_SyncChannel = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_SyncChannel)))
});
ScalaJS.asArrayOf.scala_concurrent_SyncChannel = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_SyncChannel(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.SyncChannel;", depth)
  }
});
ScalaJS.data.scala_concurrent_SyncChannel = new ScalaJS.ClassTypeData({
  scala_concurrent_SyncChannel: 0
}, false, "scala.concurrent.SyncChannel", ScalaJS.data.java_lang_Object, {
  scala_concurrent_SyncChannel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_SyncChannel.prototype.$classData = ScalaJS.data.scala_concurrent_SyncChannel;
//@ sourceMappingURL=SyncChannel.js.map
