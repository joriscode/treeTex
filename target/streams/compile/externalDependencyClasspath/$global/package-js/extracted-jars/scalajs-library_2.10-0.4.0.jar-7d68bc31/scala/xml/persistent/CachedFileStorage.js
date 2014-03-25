/** @constructor */
ScalaJS.c.scala_xml_persistent_CachedFileStorage = (function() {
  ScalaJS.c.java_lang_Thread.call(this);
  this.file1$2 = null;
  this.file2$2 = null;
  this.theFile$2 = null;
  this.dirty$2 = false;
  this.interval$2 = 0
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype = new ScalaJS.inheritable.java_lang_Thread();
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.constructor = ScalaJS.c.scala_xml_persistent_CachedFileStorage;
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.log__T__V = (function(msg) {
  ScalaJS.impls.scala_util_logging_Logged$class__log__Lscala_util_logging_Logged__T__V(this, msg)
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.file1__p2__Ljava_io_File = (function() {
  return this.file1$2
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.file2__p2__Ljava_io_File = (function() {
  return this.file2$2
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.theFile__p2__Ljava_io_File = (function() {
  return this.theFile$2
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.theFile$und$eq__p2__Ljava_io_File__V = (function(x$1) {
  this.theFile$2 = x$1
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.$switch__p2__V = (function() {
  if (ScalaJS.anyRefEqEq(this.theFile__p2__Ljava_io_File(), this.file1__p2__Ljava_io_File())) {
    var jsx$1 = this.file2__p2__Ljava_io_File()
  } else {
    var jsx$1 = this.file1__p2__Ljava_io_File()
  };
  this.theFile$und$eq__p2__Ljava_io_File__V(jsx$1)
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.dirty__Z = (function() {
  return this.dirty$2
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.dirty$und$eq__Z__V = (function(x$1) {
  this.dirty$2 = x$1
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.interval__I = (function() {
  return this.interval$2
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.initialNodes__Lscala_collection_Iterator = (function() {
  var x1 = new ScalaJS.c.scala_Tuple2$mcZZ$sp().init___Z__Z(this.file1__p2__Ljava_io_File().exists__Z(), this.file2__p2__Ljava_io_File().exists__Z());
  if ((x1 !== null)) {
    var p2 = x1.$$und1$mcZ$sp__Z();
    var p3 = x1.$$und2$mcZ$sp__Z();
    if ((false === p2)) {
      if ((false === p3)) {
        this.theFile$und$eq__p2__Ljava_io_File__V(this.file1__p2__Ljava_io_File());
        return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
      }
    }
  };
  if ((x1 !== null)) {
    var p4 = x1.$$und1$mcZ$sp__Z();
    var p5 = x1.$$und2$mcZ$sp__Z();
    if ((true === p4)) {
      if ((true === p5)) {
        if (this.file1__p2__Ljava_io_File().lastModified__J().$$less__Lscala_scalajs_runtime_Long__Z(this.file2__p2__Ljava_io_File().lastModified__J())) {
          this.theFile$und$eq__p2__Ljava_io_File__V(this.file2__p2__Ljava_io_File());
          return this.load__p2__Lscala_collection_Iterator()
        }
      }
    }
  };
  if ((x1 !== null)) {
    var p6 = x1.$$und1$mcZ$sp__Z();
    if ((true === p6)) {
      this.theFile$und$eq__p2__Ljava_io_File__V(this.file1__p2__Ljava_io_File());
      return this.load__p2__Lscala_collection_Iterator()
    }
  };
  this.theFile$und$eq__p2__Ljava_io_File__V(this.file2__p2__Ljava_io_File());
  return this.load__p2__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.load__p2__Lscala_collection_Iterator = (function() {
  this.log__T__V(("[load]\nloading " + this.theFile__p2__Ljava_io_File()));
  var src = ScalaJS.modules.scala_io_Source().fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(this.theFile__p2__Ljava_io_File(), ScalaJS.modules.scala_io_Codec().fallbackSystemCodec__Lscala_io_Codec());
  this.log__T__V(("parsing " + this.theFile__p2__Ljava_io_File()));
  var res = ScalaJS.modules.scala_xml_parsing_ConstructingParser().fromSource__Lscala_io_Source__Z__Lscala_xml_parsing_ConstructingParser(src, false).document__Lscala_xml_Document().docElem__Lscala_xml_Node().apply__I__Lscala_xml_Node(0);
  this.$switch__p2__V();
  this.log__T__V("[load done]");
  return res.child__Lscala_collection_Seq().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.save__p2__V = (function() {
  if (this.dirty__Z()) {
    this.log__T__V(("[save]\ndeleting " + this.theFile__p2__Ljava_io_File()));
    this.theFile__p2__Ljava_io_File().$delete__Z();
    this.log__T__V(("creating new " + this.theFile__p2__Ljava_io_File()));
    this.theFile__p2__Ljava_io_File().createNewFile__Z();
    var fos = new ScalaJS.c.java_io_FileOutputStream().init___Ljava_io_File(this.theFile__p2__Ljava_io_File());
    var c = fos.getChannel__Ljava_nio_channels_FileChannel();
    var jsx$5 = new ScalaJS.c.scala_xml_Elem();
    var jsx$4 = ScalaJS.modules.scala_xml_Null();
    var jsx$3 = ScalaJS.modules.scala_Predef().$$scope__Lscala_xml_TopScope$();
    var $$buf = new ScalaJS.c.scala_xml_NodeBuffer().init___();
    $$buf.$$amp$plus__O__Lscala_xml_NodeBuffer(this.nodes__Lscala_collection_Iterator().toList__Lscala_collection_immutable_List());
    var jsx$2 = $$buf;
    var storageNode = jsx$5.init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq(null, "nodes", jsx$4, jsx$3, false, jsx$2);
    var w = ScalaJS.modules.java_nio_channels_Channels().newWriter__Ljava_nio_channels_WritableByteChannel__T__Ljava_io_Writer(c, "utf-8");
    ScalaJS.modules.scala_xml_XML().write__Ljava_io_Writer__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__Lscala_Enumeration$Value__V(w, storageNode, "utf-8", true, null, ScalaJS.modules.scala_xml_XML().write$default$6__Lscala_Enumeration$Value());
    this.log__T__V(("writing to " + this.theFile__p2__Ljava_io_File()));
    w.close__V();
    c.close__V();
    fos.close__V();
    this.dirty$und$eq__Z__V(false);
    this.$switch__p2__V();
    this.log__T__V("[save done]")
  }
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.run__V = (function() {
  this.log__T__V((("[run]\nstarting storage thread, checking every " + ScalaJS.bI(this.interval__I())) + " ms"));
  while (true) {
    ScalaJS.modules.java_lang_Thread().sleep__J__V(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.interval__I()));
    this.save__p2__V()
  }
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.flush__V = (function() {
  this.dirty$und$eq__Z__V(true);
  this.save__p2__V()
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.init___Ljava_io_File = (function(file1) {
  this.file1$2 = file1;
  ScalaJS.c.java_lang_Thread.prototype.init___.call(this);
  ScalaJS.impls.scala_util_logging_Logged$class__$init$__Lscala_util_logging_Logged__V(this);
  this.file2$2 = new ScalaJS.c.java_io_File().init___T__T(file1.getParent__T(), (("" + file1.getName__T()) + "$"));
  this.theFile$2 = null;
  this.dirty$2 = false;
  this.interval$2 = 1000;
  return this
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.log__T__ = (function(msg) {
  return ScalaJS.bV(this.log__T__V(msg))
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.flush__ = (function() {
  return ScalaJS.bV(this.flush__V())
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.initialNodes__ = (function() {
  return this.initialNodes__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.interval__ = (function() {
  return ScalaJS.bI(this.interval__I())
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.dirty$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.dirty$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.dirty__ = (function() {
  return ScalaJS.bZ(this.dirty__Z())
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.$$minus$eq__Lscala_xml_Node__ = (function(e) {
  return ScalaJS.bV(this.$$minus$eq__Lscala_xml_Node__V(e))
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.$$plus$eq__Lscala_xml_Node__ = (function(e$2) {
  return ScalaJS.bV(this.$$plus$eq__Lscala_xml_Node__V(e$2))
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.nodes__ = (function() {
  return this.nodes__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_persistent_CachedFileStorage = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_persistent_CachedFileStorage.prototype = ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype;
ScalaJS.is.scala_xml_persistent_CachedFileStorage = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_persistent_CachedFileStorage)))
});
ScalaJS.as.scala_xml_persistent_CachedFileStorage = (function(obj) {
  if ((ScalaJS.is.scala_xml_persistent_CachedFileStorage(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.persistent.CachedFileStorage")
  }
});
ScalaJS.isArrayOf.scala_xml_persistent_CachedFileStorage = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_persistent_CachedFileStorage)))
});
ScalaJS.asArrayOf.scala_xml_persistent_CachedFileStorage = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_persistent_CachedFileStorage(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.persistent.CachedFileStorage;", depth)
  }
});
ScalaJS.data.scala_xml_persistent_CachedFileStorage = new ScalaJS.ClassTypeData({
  scala_xml_persistent_CachedFileStorage: 0
}, false, "scala.xml.persistent.CachedFileStorage", ScalaJS.data.java_lang_Thread, {
  scala_xml_persistent_CachedFileStorage: 1,
  scala_util_logging_Logged: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.$classData = ScalaJS.data.scala_xml_persistent_CachedFileStorage;
//@ sourceMappingURL=CachedFileStorage.js.map
